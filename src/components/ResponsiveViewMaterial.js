import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Placeholder from './Placeholder';
import Button from './Button';
import Date from './Date';

function ResponsiveViewMaterial() {
  return (
      <>
        <Box marginBottom={3}>
            <Card>
                <CardContent>
                    <Grid container spacing={1}>
                        {[0,1,2,3].map(() => 
                            <Grid item xs={12} sm={6} md={3}>
                                <Placeholder height={80} color='#74f1a6'/>
                            </Grid>
                        )}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
        <Box display='flex' justifyContent='space-between' flexWrap={{xs: 'wrap', md: 'nowrap'}}>
            <Box display='flex' 
                 width={{ xs: '100%', md: 'auto'}} 
                 flexWrap={{xs: 'wrap', sm: 'nowrap'}} 
                 alignItems='center' 
                 marginBottom={{ xs: 1, md: 0}}>
                <Box flexGrow={1}><Date /></Box>
                <Box width={{ xs: '100%', sm: 'auto'}} m={1}>to</Box>
                <Box flexGrow={1}><Date /></Box>
            </Box>
            <Box display='flex' width={{ xs: '100%', md: 'auto'}}>
                <Grid container spacing={1}>
                {[0,1,2].map(() => 
                    <Grid item xs={12} sm>
                        <Button />
                    </Grid>
                )}
                </Grid>
            </Box>
        </Box>
    </>
  );
}

export default ResponsiveViewMaterial;
