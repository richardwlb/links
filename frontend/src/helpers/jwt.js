export const getTokenExpire = (token) => {
    if (!token) return 0;

    try{
    // const tokenParts = token.split('.');
    // const header = tokenParts[0];
    // const payload = tokenParts[1];
    // const signature = tokenParts[2];

    // Essa linah faz a mesma coisa que as 4 linahs acima
    // const [header, payload, signature] = token.split('.');
    const [, payload] = token.split('.');

    const data = JSON.parse(atob(payload));
    const expires = data ? data.exp : 0;
    return expires;
    } catch (e) {
        return 0;
    }
};