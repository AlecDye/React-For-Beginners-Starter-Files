import React from "react"

// Landing page component: allows you to name the store
class StorePicker extends React.Component {
    render() {
        // <React.Fragment> is the same as <> </>
        return (
            <>
                <form className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input
                        type="text" required placeholder="Store Name"
                    />
                    <button type="submit">
                        Visit Store ➡
                    </button>
                </form>
            </>
        )
    }
}

export default StorePicker;