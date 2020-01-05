/**
 * Keep Alive handler
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
 
/*const keepAlive = (request, reply) => {
  reply.code(200).send('API is alive')
}*/

 const keepAlive = async (request, reply) => {
  return 'API is alive'
} 

module.exports = { keepAlive }
