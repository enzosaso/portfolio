export const getChatGPT = async (inputText, conversationHistory = []) => {
  const id = String(Date.now())
  const errorMessage = {
    id,
    type: 'assistant',
    text: 'Lo lamento, no puedo responder tu pregunta.'
  }

  try {
    const response = await fetch('/api/chatgpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputText, conversationHistory })
    })

    const data = await response.json()

    if (!response.ok) {
      return errorMessage
    }

    return data
  } catch (error) {
    return errorMessage
  }
}
