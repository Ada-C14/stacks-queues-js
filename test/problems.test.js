const { balanced, evaluatePostfix } = require('../lib/problems');

describe("test wave 3 problems", () => {
    describe("balanced", () => {
        it('should return true given balanced strings', () => {
            expect(balanced('(({}))')).toEqual(true);
        });

        it('regards an empty string as balanced', () => {
            expect(balanced('')).toEqual(true);
        });

        it('will return false for an unbalanced set of parens', () => {
            expect(balanced('(()')).toEqual(false);
            expect(balanced('(()}')).toEqual(false);
            expect(balanced('([]]')).toEqual(false);
        });

        it('works for {} and []', () => {
            expect(balanced('[]')).toEqual(true);
            expect(balanced('()')).toEqual(true);
        });

        it('works if the string has opens and closes in the beginning and end', () => {
            expect(balanced('[]()')).toEqual(true);
        });
    });

    describe.skip("postfix", () => {
        it('can add 2 numbers together', () => {
            expect(evaluatePostfix('34+')).toEqual(7);
            expect(evaluatePostfix('34*')).toEqual(12);
            expect(evaluatePostfix('34-')).toEqual(-1);
            expect(evaluatePostfix('34/')).toEqual(0);
        });

        it('can evaluate a more complicated expression', () => {
            expect(evaluatePostfix('34+2*')).toEqual(14);
            expect(evaluatePostfix('34*2/')).toEqual(6);
            expect(evaluatePostfix('34-1+')).toEqual(0);
            expect(evaluatePostfix('34/7-')).toEqual(-7);
            expect(evaluatePostfix('35+6*')).toEqual(48);
            expect(evaluatePostfix('62/5+')).toEqual(8);
        });
    });
});