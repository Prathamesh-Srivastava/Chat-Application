const SingleMessage = ()=>{
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            <time className="text-xs opacity-100">12:45</time>
        </div>
    );
}
export default SingleMessage;