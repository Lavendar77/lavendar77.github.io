import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => {
    return {
      name: 'Adeyinka Adefolurin',
      phone: '2348135303377',
      email: 'folurinyinka@gmail.com',
      linkedin: 'https://linkedin.com/in/adeyinka-adefolurin/',
      github: 'https://github.com/lavendar77/',
      gitlab: 'https://gitlab.com/lavendar77/',
      twitter: 'https://twitter.com/_fykay',
      skype: 'https://join.skype.com/invite/kYlvM0lNPBwf',
      drive: 'https://drive.google.com/file/d/1iVlP4fNT0XVv_aC8VDaSUeMHqQe9SL0k/view?usp=sharing'
    }
  }
})
