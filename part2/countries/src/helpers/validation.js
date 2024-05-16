// helpers/validation.js

/**
 * 检查提供的 prop 是否为函数，如果不是，则抛出错误。
 * @param {any} propValue - 需要验证的 prop 值。
 * @param {string} propName - prop 的名称，用于错误消息。
 */
export function requireFunctionProp(propValue, propName) {
  if (typeof propValue !== "function") {
    throw new Error(`${propName} prop is required and must be a function`);
  }
}

// 可以在这里添加更多相关的验证函数
