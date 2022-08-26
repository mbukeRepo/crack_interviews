function isValidWalk(walk) {
    let dx = 0
    let dy = 0
    let dt = walk.length
    
    for (const element of walk) {
      switch (element) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }

  //Tests

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // This will return True