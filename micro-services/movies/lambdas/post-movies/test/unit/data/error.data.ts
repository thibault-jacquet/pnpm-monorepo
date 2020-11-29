export default {
  statusCode: 400,
  message: [
    {
      target: { id: 'id1', name: 'name1' },
      property: 'title',
      children: [],
      constraints: { isString: 'title must be a string' }
    },
    {
      target: { id: 'id1', name: 'name1' },
      property: 'type',
      children: [],
      constraints: { isString: 'type must be a string' }
    },
    {
      target: { id: 'id1', name: 'name1' },
      property: 'description',
      children: [],
      constraints: { isString: 'description must be a string' }
    }
  ],
  error: 'Bad Request'
}
