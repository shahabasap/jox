import { filterJobs } from '~/server/models/job';

export default defineEventHandler(async (event) => {
  try {
    const { search, category } = await readBody(event);
    const jobs = await filterJobs(search,category);
    return { jobs };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});