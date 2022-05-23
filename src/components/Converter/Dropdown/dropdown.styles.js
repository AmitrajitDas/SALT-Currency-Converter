import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  select: {
    height: 40,
    fontSize: '2rem !important',
    fontWeight: '800 !important',
    color: '#434343 !important',
    fontFamily: "'HK Grotesk', sans-serif !important",
    '& .MuiSvgIcon-root': {
      color: '#434343 !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none !important',
    },
  },

  selectDrop: {
    fontFamily: "'HK Grotesk', sans-serif !important",
    fontSize: '1.5rem !important',
    fontWeight: '600 !important',
    color: '#434343 !important',
  },
}))
