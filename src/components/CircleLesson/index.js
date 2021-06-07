import React from "react";
import {CgFileDocument} from "react-icons/cg/index";

export const CircleLesson = ({checkDone, id}) => {
    return (
        <div style={{
            height: 100, width: 100, borderRadius: 50, backgroundColor: checkDone?.includes(id) ? '#00FA9A' : 'white',
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            marginRight: 20
        }}>
            <div style={{
                height: 90, width: 90, borderRadius: 50, backgroundColor: '#525464',
                alignItems: 'center', justifyContent: 'center', display: 'flex',
                borderBlockWidth: 20
            }}>
                <CgFileDocument style={{
                    alignSelf: 'center',
                    fontSize: 50, color: checkDone?.includes(id) ? '#00FA9A' : 'white'
                }}/>
            </div>
        </div>
    )
}
