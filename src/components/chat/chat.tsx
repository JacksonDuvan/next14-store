'use client'

import { useChat } from 'ai/react'

export function Chat({ agent }: { agent: string }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: agent
      }
    ]
  })

  return (
    <div>
      {messages.filter(m => m.role !== 'system').map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input
            value={input}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  )
}