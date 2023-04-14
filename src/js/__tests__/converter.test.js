import ArrayBufferConverter from "../converter.js";
import getBuffer from "../getbuffer.js";

test.each([
  '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  '{}',
  '{"data":{"user":{"id":1,"name":"Hitman"}}}',
])(
  ("testing ArrayBufferConverter methods"),
  (expected) => {
    const arrayBuffer = new ArrayBufferConverter();
    const data = getBuffer(expected);

    arrayBuffer.load(data);
    const recieved = arrayBuffer.toString();
    expect(expected).toEqual(recieved);
  },
);
