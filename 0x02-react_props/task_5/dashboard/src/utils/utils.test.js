import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

test('returns current year', () => {
    expect(getFullYear()).toBe(2022);
});

test('returns the correct string when argument is true or false', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('returns string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});