// Your public key generated in the previous step
const signerPublicKey = "0x04a1546c5e68bd5569e0999ff467d5c92c4884969a38b1112569389ae1ad5b7e22f4b4536246e9f269c54389e0175e43be46945cdc294aa2a37cd5a321fbcbdf0b";

// Crossmint's API key
const myApiKey = "sk_staging_ABAxUH7V4sFwmTTAxsRtiGRVNVz5hmiBtLxMko7CpeQxNU2zpqELwTHdVhXvKEZrCbQC2wyWQLgeMqHSfk1hsSchXH5T5qUU6bohoMydcHzxSep5Y5BVL7kHMn3z5eXUxAcGEqT4C6bb4GXDzPjmzppjbm5epCUipaTot4PjZLG3gm9KNbx7PZywfYGpEJ4JaAKHi3mYWzAh6N21zhS2PAes";

const walletParams = {
    type: "evm-smart-wallet",
    config: {
        signer: {
            type: "evm-keypair",
            address: signerPublicKey,
        },
    },
};

const options = {
    method: "POST",
    headers: {
        "X-API-KEY": myApiKey,
        "Content-Type": "application/json",
    },
    body: JSON.stringify(walletParams),
};

let walletAddress;

fetch("https://staging.crossmint.com/api/v1-alpha2/wallets", options)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((response) => {
        walletAddress = response.address;
    })
    .catch((err) => {
        console.error("Failed to create wallet:", err.message);
        throw err;
    });

