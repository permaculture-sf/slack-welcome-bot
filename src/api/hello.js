// eslint-disable-next-line import/prefer-default-export
export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}
