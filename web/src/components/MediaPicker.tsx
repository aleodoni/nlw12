'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)

    // Para fazer preview de video, basta utilizar tag video ao invés de img
    // accept="image/*,video/*"
    // Para usuário não controlar o video, passe controls=false na tag
  }

  return (
    <>
      <input
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
        onChange={onFileSelected}
        name="coverUrl"
      />
      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
