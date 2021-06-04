import {useSprings} from 'react-spring'
import {
    Bar,
    Container,
    Horizon
}                   from './Elements'

const App = () => {

    const totalHeight = 1000
    const barEndHeight = 100
    const numBars = 10
    const duration = 10000

    const [springs, api] = useSprings(numBars, index => ({
        from: {
            height: 0,
            y: 0
        },
        delay: index * (duration / numBars),
        loop: true,
        to: {
            height: barEndHeight,
            y: totalHeight + barEndHeight,
        },
        config: {
            duration
        }
    }))

    api.start(index => ({
        height: barEndHeight,
        y: totalHeight + barEndHeight
    }))

    return (
        <Container>
            <Horizon>
                {springs.map(({height, y}, index) =>
                    <Bar style={{height, y}} key={index}/>
                )}
            </Horizon>
        </Container>
    )
}

export default App;
