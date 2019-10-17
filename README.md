# sol-elgamal

Implementation in solidity of additively homomorphic operation using ElGamal cryptosystem


## API

- *Client*
The client implementation in JS implements 

1) `Gen`: Generates key pair
2) `Enc`: Encrypts a message
3) `Dec`: Decrypts a message

- *Smart Contract*
The smart contract implementation in solidity implements

1) `HAdd`: Homomorphic addition
2) `HMul`: Homomorphic multiplication


## Implementation Notes

### Parameters

- *Public Parameters*
	- `p`: Prime number
	- `g`: Generator ∀ n ∈ [1; p − 1] : ∃k; n = gk mod p;
	- `pk`: Public key  `k = g^a mod p`

- *Private Parameters*
	- `a`: Random private integer
	- `sk`: Private key `sk = a`

