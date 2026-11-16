// Shared lesson behaviour: quizzes, copy buttons, step checklists.
// Markup contracts:
//   Quiz:   <div class="quiz" data-answer="2"> <p class="q">…</p> <ol><li><button class="opt">…</button></li>…</ol> <p class="explain">…</p> </div>
//           data-answer is the 1-based index of the correct option. Add <p class="quiz-score" data-quiz-score></p> anywhere for a tally.
//   Steps:  <ol class="steps" data-key="lesson-0001"> <li>…</li> </ol>   (a "done" checkbox is added to each step, remembered per browser)
//   Code:   every <pre> gets a "copy" button.
(function () {
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  // Quizzes
  const quizzes = [...document.querySelectorAll(".quiz")];
  const scoreEls = document.querySelectorAll("[data-quiz-score]");
  let right = 0, answered = 0;
  const renderScore = () => scoreEls.forEach((el) => {
    el.textContent = answered === 0
      ? `${quizzes.length} câu hỏi — tự nhớ lại trước khi chọn, đừng cuộn lên xem.`
      : `Đúng ${right}/${answered} (tổng ${quizzes.length} câu)`;
  });
  quizzes.forEach((quiz) => {
    const correct = Number(quiz.dataset.answer);
    const opts = [...quiz.querySelectorAll("button.opt")];
    opts.forEach((btn, i) => btn.addEventListener("click", () => {
      if (quiz.classList.contains("answered")) return;
      quiz.classList.add("answered");
      answered++;
      if (i + 1 === correct) { right++; btn.classList.add("right"); }
      else { btn.classList.add("wrong"); opts[correct - 1].classList.add("right"); }
      opts.forEach((b) => (b.disabled = true));
      renderScore();
    }));
  });
  renderScore();

  // Copy buttons
  document.querySelectorAll("pre").forEach((pre) => {
    const b = document.createElement("button");
    b.className = "copy-btn"; b.type = "button"; b.textContent = "copy";
    b.addEventListener("click", async () => {
      const text = pre.querySelector("code")?.innerText ?? pre.innerText;
      try { await navigator.clipboard.writeText(text); b.textContent = "đã copy"; }
      catch { b.textContent = "lỗi"; }
      setTimeout(() => (b.textContent = "copy"), 1400);
    });
    pre.appendChild(b);
  });

  // Step checklists
  document.querySelectorAll("ol.steps[data-key]").forEach((ol) => {
    const key = "steps:" + ol.dataset.key;
    const saved = store.get(key) || [];
    [...ol.children].forEach((li, i) => {
      const label = document.createElement("label");
      label.className = "check";
      const cb = document.createElement("input");
      cb.type = "checkbox"; cb.checked = !!saved[i];
      li.classList.toggle("done", cb.checked);
      cb.addEventListener("change", () => {
        saved[i] = cb.checked; li.classList.toggle("done", cb.checked); store.set(key, saved);
      });
      label.append(cb, " xong");
      li.appendChild(document.createElement("br"));
      li.appendChild(label);
    });
  });
})();
