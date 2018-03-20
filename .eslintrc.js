module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }]
    },
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "globals": {
        "__CONFIG__": true
    }
};