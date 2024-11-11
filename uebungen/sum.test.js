const sum= require('./sum');

test
(
    'adds 1 + 2 to equal 3', () =>
    {
        expect(sum(10, 2)).toBe(12);
    }
);

test
(
    'array-test', () =>
    {
        const a = [1,2,3];
        expect(a[0]).toBe(1);
    }
);

test
(
    'Object-test', () =>
    {
        const a = { firstname: "bob"};
        expect(a.firstname).toBe("bob");
    }
);