import * as crypto from 'crypto-js';

export const cryptoHash = (...inputs) => {
    const hash = crypto.SHA256(
        inputs
            .map((input) => JSON.stringify(input))
            .sort()
            .join(' '),
    );

    return hash.toString();
};
export const hex2bin = (hex: string) => {
    const bin = parseInt(hex, 16).toString(2);
    const zeroPadding = '0'.repeat(256 - bin.length);

    return zeroPadding + bin;
};
