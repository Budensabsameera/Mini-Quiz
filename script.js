document.addEventListener("DOMContentLoaded", () => {
  // First Question and Answer
  let answer1 = document.getElementById("firstoneans");
  let firstnext = document.getElementById("firstnext");
  let firstoutput = document.getElementById("firstoutput");
  let firstsubmit = document.getElementById("firstsubmit");

  // Second Question and Answer
  let answer2 = document.getElementById("secondoneans");

  let secondnext = document.getElementById("secondnext");
  let secondoutput = document.getElementById("secondoutput");
  let secondsubmit = document.getElementById("secondsubmit");

  // Third Question and Answer
  let answer3 = document.getElementById("thirdoneans");
  let thirdnext = document.getElementById("thirdnext");
  let thirdoutput = document.getElementById("thirdoutput");
  let thirdsubmit = document.getElementById("thirdsubmit");

  //for scroing

  let count = 0;
  let output = document.getElementById("output");

  //next buttons
  firstnext.addEventListener("click", () => {
    document.getElementById("firstone").style.display = "none";

    document.getElementById("secondone").style.display = "block";
  });

  secondnext.addEventListener("click", () => {
    document.getElementById("secondone").style.display = "none";

    document.getElementById("thirdone").style.display = "block";
  });

  //submit buttons

  firstsubmit.addEventListener("click", () => {
    let selected = document.querySelector('input[name="q1"]:checked');
    if (selected && selected.value === "B") {
      firstoutput.innerHTML = "✅ Yes, you got it right!";
      count++;
    } else {
      firstoutput.innerHTML = "❌ No, the correct answer is Mars.";
    }
    firstsubmit.disabled = true;
  });
  secondsubmit.addEventListener("click", () => {
    let selected = document.querySelector('input[name="q2"]:checked');
    if (selected && selected.value === "B") {
      secondoutput.innerHTML = "✅ Yes, you got it right!";
      count++;
    } else {
      secondoutput.innerHTML = "❌ No, the correct answer is Tokyo.";
    }
    secondsubmit.disabled = true;
  });

  thirdsubmit.addEventListener("click", () => {
    let selected = document.querySelector('input[name="q3"]:checked');
    if (selected && selected.value === "C") {
      thirdoutput.innerHTML = "✅ Yes, you got it right!";
      count++;
    } else {
      thirdoutput.innerHTML = "❌ No, the correct answer is Paris.";
    }
      thirdsubmit.disabled = true;
      output.style.display = "block";
          document.getElementById("thirdone").style.display = "none";

    
      
      
    output.innerHTML = `you got ${count}/3`;
  });
});







