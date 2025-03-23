<template>
    <div class="jivalab-container">
        <header class="header">
            <span style="display: flex; align-items: center;">
                <img src="../assets/arrowblue.png" alt="Go Back" class="arrow-back" @click="$router.push('/home')">
                <div class="logo">Jiva<span style="font-weight: 400;">lab</span></div>
            </span>
        <div class="header-icons">
          <div class="notification-icon">
            <img src="../assets/bellicon.png" alt="Notifications" class="icon-placeholder">
          </div>
          <div class="profile-icon">
            <img src="../assets/usericon.png" alt="Notifications" class="icon-placeholder">
          </div>
        </div>
      </header>
  
      <div class="content-card">
        <div class="red-top"></div>
        <div class="mic-icon-container">
          <div class="mic-icon">
            <img src="../assets/mic.png" alt="Microphone" class="mic-icon-placeholder">
          </div>
        </div>
  
        <h2 class="title">Voice Analysis Instructions</h2>
  
        <div class="instructions-list">
          <div class="instruction-item">
            <div class="instruction-number">1</div>
            <div class="instruction-text">
              <p style="color: #0896B6;">Find a quiet environment <span class="highlight">with minimal background noise</span></p>
            </div>
          </div>
  
          <div class="instruction-item">
            <div class="instruction-number">2</div>
            <div class="instruction-text">
              <p style="color: #0896B6;">Hold your device <span class="highlight">about 6 inches from your mouth</span></p>
            </div>
          </div>
  
          <div class="instruction-item">
            <div class="instruction-number">3</div>
            <div class="instruction-text">
              <p style="color: #0896B6;">Read the provided text clearly <span class="highlight">at your normal speaking pace</span></p>
            </div>
          </div>
        </div>
  
        <button class="record-button">I'm Ready To Record</button>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .jivalab-container {
    font-family: Poppins;
    max-width: 414px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: #f5f8f9;
    margin-bottom: 1.75rem;
  }

  .logo {
    color: #0896B6;
    font-weight: bold;
    font-size: 22px;
  }
  
  .header-icons {
    display: flex;
    gap: 16px;
  }
  
  

  
  .arrow-back {
    transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    height: 2rem;
    width: auto;
    margin-right: 0.6rem;
  }
  
  .header-icons {
    display: flex;
    gap: 16px;
  }
  
  .notification-button, .profile-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
  
  .content-card {
    background-color: #fff;
    border-radius: 10px;
    margin: 16px;
    padding-bottom: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: #0896B6 0.5px solid;
  }

  .red-top {
    width: 100%;
    height: 2.5rem;
    background-color: #0896B6;
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
    margin-bottom: 2.5rem;
  }
  

  .icon-placeholder {
    height: 1.5rem;
    width: auto;
  }

  .mic-icon-placeholder {
    height: 2.8rem;
    width: auto;
  }
  
  .mic-icon-container {
    background-color: rgba(250, 82, 82, 0.1);
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .title {
    color: #0896B6;
    font-size: 1.1rem;
    margin-bottom: 0.1rem;
    margin-top: 1rem;
    font-weight: 500;
    text-align: center;
  }
  
  .instructions-list {
    width: 93%;
    display: flex;
    flex-direction: column;
    gap: 12px;
        padding: 24px;

  }
  
  .instruction-item {
    display: flex;
    background-color: #F0F8FF;
    align-items: center;
    border-radius: 0.5rem;
    padding: 12px 1rem;
  }
  
  .instruction-number {
    background-color: #0896B6;
    color: #FFF;
    font-weight: 400;
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
  }
  
  .instruction-text {
    flex: 1;
    font-size: 0.85rem;
  }
  
  .instruction-text p {
    margin: 0;
    line-height: 1.2rem;
  }
  
  .highlight {
    color: #009CB4;
    font-weight: 600;
  }
  
  .record-button {
    background-color: #009CB4;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 16px 24px;
    font-size: 1.1rem;
    font-weight: bold;
    width: 93%;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .record-button:hover {
    background-color: #008CA4;
  }
  
  </style>