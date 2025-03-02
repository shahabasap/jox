import { getJob } from '~/server/models/job';

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id;
    try {
        const job = await getJob(id);
        return { job };
      } catch (error) {
        console.error('Error fetching jobs:', error);
        throw createError({
          statusCode: 500,
          statusMessage: 'Internal Server Error',
        });
      }
   
});
