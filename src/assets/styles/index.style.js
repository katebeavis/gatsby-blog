import styled from "styled-components"
import { Link } from "gatsby"

export const Header3 = styled.h3`
  font-size: 1.6875rem;
  line-height: 2.4375rem;
  font-weight: 600;
`

export const SLink = styled(Link)`
  text-decoration: none;
  color: #222;
  &:hover {
    border-bottom: 1px solid #222;
  }
`

export const Date = styled.time`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
`
export const Tag = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #f7a046;
`

export const Divider = styled.span`
  margin: 0 0.3125rem;
`

export const BlogCard = styled.div`
  margin-bottom: 1.25em;
`
