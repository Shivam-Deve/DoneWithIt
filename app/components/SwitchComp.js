import { StyleSheet, Switch, View } from 'react-native'
import React, { useState } from 'react'

const SwitchComp = () => {
    const [val, setVal] = useState(false);
    return (
        <View>
            <Switch
                value={val}
                onValueChange={setVal(e => !e)}
            />
        </View>
    )
}

export default SwitchComp