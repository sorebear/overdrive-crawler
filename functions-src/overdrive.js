

exports.handler = (event, context, callback) => {

  return callback(null, {
    statusCode: 200,
    body: 'Let\'s kick this into overdrive!',
  });
}