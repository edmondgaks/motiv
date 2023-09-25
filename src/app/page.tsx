"use client";
import addNotification from "react-push-notification"

export default function Home() {
  const handleClicked = () => {
    addNotification({
      title: 'Warning',
      subtitle: 'This is a subtitle',
      message: 'This is a very long message',
      theme: 'darkblue',
      native: true // when using native, your OS will handle theming.
    })
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button onClick={handleClicked} className="bg-primary">SHadCn</button>
      </main>
  )
}
