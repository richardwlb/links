export const getFormData = (e) => {
    // e.preventDefault();

    // pegando os valores do form:
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    return data;
};