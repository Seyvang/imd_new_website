import React from 'react'
import { members } from '../../data/members'
import { Container } from "react-bootstrap";

function MemberID({member}) {
  return (
    <Container className="bg-light">
        <h1>{member.id} {member.name}</h1>
    </Container>
  )
}

export default MemberID

export async function getStaticProps(context) {
  const {params} = context
  const {memberid} = params
  console.log(memberid)

  return{
    props: {
      member: members[memberid-1]
    }
  }
}

export async function getStaticPaths() {
    let totalList = []
    const NumMembers = members.length
    for (let i=1; i<=NumMembers; i++){
        totalList.push({
            params: { memberid: `${i}`}
        })
    }
    // console.log(totalList)
    return( {
      paths: totalList,
      fallback: false
    } )
}