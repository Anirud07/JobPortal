import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// const skills = ["Html", "Css", "Javascript", "Reactjs"]
const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    return (
        <div className={`bg-background dark:bg-black`}>
            <Navbar />
            <div className={`max-w-4xl mx-auto bg-card dark:bg-card border border-border dark:border-border rounded-2xl my-5 p-8`}>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className={`font-medium text-xl dark:text-white`}>{user?.fullname}</h1>
                            <p className={`text-muted-foreground dark:text-white`}>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span className={`text-muted-foreground dark:text-white`}>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span className={`text-muted-foreground dark:text-white`}>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1 className={`font-bold text-lg dark:text-white`}>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index} className={`bg-accent dark:bg-accent text-accent-foreground dark:text-accent-foreground`}>{item}</Badge>) : <span className={`text-muted-foreground dark:text-white`}>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className={`text-md font-bold dark:text-white`}>Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className={`text-blue-500 w-full hover:underline cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}>{user?.profile?.resumeOriginalName}</a> : <span className={`text-muted-foreground ${isDarkMode ? 'text-white' : 'text-black'}`}>NA</span>
                    }
                </div>
            </div>
            <div className={`max-w-4xl mx-auto bg-card dark:bg-card rounded-2xl`}>
                <h1 className={`font-bold text-lg my-5 ${isDarkMode ? 'text-white' : 'text-black'}`}>Applied Jobs</h1>
                {/* Applied Job Table   */}
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile