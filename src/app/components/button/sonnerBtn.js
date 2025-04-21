export default function SonnerBtn({text = 'Show Toast', bgColor = 'cyan', textColor = "black", ...event}) {
    return (
        <button style={{
            backgroundColor: bgColor,
            color: textColor,
            padding: "0.5rem",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
            fontSize: "1rem",
            boxShadow: "none",
        }}
        {...event}
        >
            {text}
        </button>
    )
}