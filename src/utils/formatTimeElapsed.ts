

export const formatTimeElapsed = (seconds: number) => {
    let minutes = Math.floor(seconds / 60)//inteiro 
    const second = seconds - (minutes * 60)//10 seconds

    let secString = `${second < 10 ? '0' + second : second}`
    let minString = `${minutes < 10 ? '0' + minutes : minutes}`

    return `${minString}:${secString}`
}