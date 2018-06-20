/**
 * @swagger
 * /hello:
 *  get:
 *    summary: 针对所有请求的返回
 *    description: 针对所有请求的返回
 *    tags: [事例]
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: msg
 *        type: string
 *        required: false
 *        in: query
 *        description: 返回信息, 默认为hello world
 *    responses:
 *      200:
 *        description: "{ msg: 'hello world' }"
*/
const all = function * () {
  this.body = { msg: this.query.msg || 'hello world' }
}

module.exports = all
