---
title: Code Foundations
link: code-foundations
---

![Object Pool Code](/images/object-pool-code.png)

When I was programming Hell Court for Ludum Dare, I didn't start with any code. That's probably why the resulting code ended up being a mess. That and the 72 hours limit. So before I'll continue working on the game, I decided to write some foundations. Here's what I ended with.

### Script Base Class

I made a class that all of my scripts will inherit from instead of the Unity's `MonoBehaviour` class. It will contain pointers to frequently used objects. This will prevent code duplications.
