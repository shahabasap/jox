import { getCategories } from '~/server/models/job';

export default defineEventHandler(async (event) => {
  try {
    const categories = await getCategories();
    return { categories };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});