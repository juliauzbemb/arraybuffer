import ArrayBufferConverter from "./converter.js";
import getBuffer from "./getbuffer.js";

const data = getBuffer('{"d": "s"}');
console.log(data);
const converter = new ArrayBufferConverter();
converter.load(data);
const result = converter.toString();
console.log(result);
