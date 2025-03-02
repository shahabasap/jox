import { getJobs } from '~/server/models/job';

export default defineEventHandler(async (event) => {
  try {
    const jobs = await getJobs();
    return { jobs };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});