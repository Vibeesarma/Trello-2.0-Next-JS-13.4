import formatTodoForAI from "./formatTodoForAI";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodoForAI(board);

  //   this is get from ai respone -------------------
  //   const res = await fetch("/api/generateSummary", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ todos }),
  //   });

  //   const GPTdata = await res.json();
  //   const { content } = GPTdata;

  // tempory response for limited for open ai---------------------------

  const pro = new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  });
  await pro;

  const content =
    "Welcome Mr. Vibeesarma! There are 1 to-do, 1 in-progress, and 1 done task in the list. Have a productive day!";

  // ------------

  return content;
};

export default fetchSuggestion;
