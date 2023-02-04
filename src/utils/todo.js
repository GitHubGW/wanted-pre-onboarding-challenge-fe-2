/**
 * Get All Todos
 * @returns {Todo[]}
 */
const getTodos = () => {};

/**
 * Get Todo
 * @param {number} id - 아이디
 * @return {Todo}
 */
const getTodo = (id) => {};

/**
 * Create Todo
 * @param {string} title - 제목
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 * @returns {boolean}
 */
const createTodo = (title, content, category, tags) => {};

/**
 * Update Todo
 * @param {number} id - 아이디
 * @param {string} [title] - 제목
 * @param {string} [content] - 내용
 * @param {string} [category] - 카테고리
 * @param {string[]} [tags] - 태그들
 * @return {boolean}
 */
const updateTodo = (id, title, content, category, tags) => {};

/**
 * Delete All Todos
 * @return {boolean}
 */
const deleteTodos = () => {};

/**
 * Delete Todo
 * @param {number} id - 아이디
 * @return {boolean}
 */
const deleteTodo = (id) => {};
