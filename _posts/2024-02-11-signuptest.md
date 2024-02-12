---
comments: true
title: Signup Page test
post-image: https://i.ibb.co/5LjNJsd/Sign-Up-COVER.png
description: Here's where you sign up for Food Finder
permalink: signuptest
type: tangibles
author: Ryan, Aaron, Jason
courses: { csp: {week: 0} }
categories: [C4.1]
tags:
- APCSP
- CODE CODE CODE
---

<script src="signup.js">
</script>
<div id="signup">
  <p><label>
      Name:
      <input type="text" name="name" id="name" required>
  </label></p>
  <p><label>
      User ID:
      <input type="text" name="uid" id="uid" required>
  </label></p>
  <p><label>
      Password:
      <input type="password" name="password" id="password" required>
  </label></p>
  <p>
      <button class="button" type="submit" onclick="signup()">Sign Up</button>
  </p>
</div>
