module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['**/*.vue', '!**/node_modules/**'],
    moduleFileExtensions: [
        'js',
        'ts',
        'json',
        'vue'
    ],
    transform: {
        '.*\\.(vue)$': 'vue-jest',
        '^.+\\.tsx?$': 'ts-jest',
        '.*\\.(js)$': 'babel-jest'
    },
    testURL: 'http://localhost/',
    testRegex: [
        '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
        '/src/*/*.spec.(ts|js)$/'
    ]
}
