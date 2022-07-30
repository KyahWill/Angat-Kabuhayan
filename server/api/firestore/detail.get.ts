import { useQuery } from "h3";
import { get } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = useQuery(event.req);
    return await get(col, id);
  } catch (error) {
    return { error: error.message }
  }
});