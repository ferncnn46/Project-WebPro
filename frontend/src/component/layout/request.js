import React from 'react'

const request = () => {
    return (
        <div>request
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea value={message} onChange={handleMessageChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default request