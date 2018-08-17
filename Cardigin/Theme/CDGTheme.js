import getTheme from '../native-base-theme/components';
import Container from '../native-base-theme/components/Container';
export default class CDGTheme extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Content />
        </Container>
      </StyleProvider>
    );
  }
}
