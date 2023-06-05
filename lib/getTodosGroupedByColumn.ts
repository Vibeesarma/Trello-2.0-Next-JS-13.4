import { databases } from "@/appwrite";

const getTodosGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
  );

  const todos = data.documents;

  // map it over todos
  const columns = todos.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: [],
      });
    }

    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      ...(todo.image && { image: JSON.parse(todo.image) }),
    });

    return acc;
  }, new Map<TypedColumn, Column>());

  //   if columns doesn't have inprogress ,todo and done add them with empty todos
  const columnsTypes: TypedColumn[] = ["todo", "inprogress", "done"];

  for (const columnsType of columnsTypes) {
    if (!columns.get(columnsType)) {
      columns.set(columnsType, {
        id: columnsType,
        todos: [],
      });
    }
  }

  //   sort orders of columntypes
  const sortedcolumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnsTypes.indexOf(a[0]) - columnsTypes.indexOf(b[0])
    )
  );

  const board: Board = {
    columns: sortedcolumns,
  };

  return board;
};

export { getTodosGroupedByColumn };
