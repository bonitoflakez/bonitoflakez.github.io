---
title: "SSH Key Types: Ed25519 vs. RSA"
description: "A comparison between Ed25519 and RSA SSH keys, their differences in security, performance, and compatibility. A straightforward guide for choosing the best key type for your SSH connections."
pubDate: "Mar 10 2024"
---

#### Table of Content

- [Ed25519](#ed25519)
- [RSA](#rsa)
- [Conclusion](#conclusion)
- [References](#references)

---

I always use git SSH and there are two methods to generate SSH keys. **Ed25519** and **RSA**. I didn't know much about both these algorithms so I did some reading to know more and here's what I discovered.

### Ed25519

Ed25519 is a public-key signature system that uses elliptic curve cryptography (ECC). It was introduced in OpenSSH version 6.5 and is based on the Twisted Edwards curve. There are some advantages of using Ed25519 over RSA.

- **Security**: Ed25519 provides a high level of security with a smaller key size. The security of Ed25519 is comparable to RSA with a 3000-bit key, making it a strong choice for SSH keys.
- **Performance**: Ed25519 is faster than RSA regarding key generation and signature verification. This can lead to quicker logins and a smoother user experience.
- **Key Size**: Ed25519 keys are smaller than RSA keys. An Ed25519 public key is only 68 characters long, compared to RSA's 3072 characters. This compactness not only makes the keys easier to manage but also reduces the risk of key exposure.
- **Robustness**: Ed25519 is more robust against PRNG (Pseudo-Random Number Generator) Failures, which can be critical vulnerabilities in cryptographic systems.

Here's how you can generate an `ed25519` key.

```ssh
ssh-keygen -t ed25519 -C "<some-email@example.com>"
```

### RSA

RSA is well known and has been the standard for SSH keys for many years. It is widely supported and recognized for its security. However, there are several reasons why RSA might not be the best choice for the future.

- **Key Size**: To be considered secure, keys must be at least 2048 bits long for RSA. However, even with a 4096-bit key, RSA's security is not as strong as Ed25519's with a comparable key size.
- **Performance**: RSA operations, especially with larger key sizes, can be slower than those of Ed25519 which leads to longer login times and a less responsive user experience.
- **Security Concerns**: RSA keys are considered less secure if they are less than 1024 bits long. The ENISA recommends using keys of 2048 bits for short-term security only.

Here's how you can generate a `rsa` key

```shell
ssh-keygen -o -t rsa -b 4096 -C "<some-email@example.com>"
```

### Conclusion

While RSA remains a viable option for SSH keys, Ed25519 offers a more secure, faster, and more efficient alternative. The choice between Ed25519 and RSA (RSA-2048 or RSA-4096 to be specific) can significantly impact the security, performance, and compatibility of SSH connections. Personally, Ed25519 works the best as it prioritizes security and performance.

---

### References

1. https://en.wikipedia.org/wiki/EdDSA
2. https://en.wikipedia.org/wiki/RSA_(cryptosystem)
3. https://news.ycombinator.com/item?id=12575358
4. https://security.stackexchange.com/questions/90077/ssh-key-ed25519-vs-rsa
5. https://blog.kovah.de/en/2019/switching-from-rsa-to-eddsa-ec25519/
6. https://goteleport.com/blog/comparing-ssh-keys/
7. https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54
8. https://serverfault.com/questions/1081266/ssh-keys-ed25519-vs-rsa-performance-demystified
9. https://cryptsus.com/blog/how-to-secure-your-ssh-server-with-public-key-elliptic-curve-ed25519-crypto.html
10. https://sequr.be/blog/2020/09/upgrade-your-ssh-keys-to-ed25519/
11. https://www.unixtutorial.org/how-to-generate-ed25519-ssh-key/
