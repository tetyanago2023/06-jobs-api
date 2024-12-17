// controller/jobs.js

const Job = require('../models/Job');
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
    console.log(jobs, req.user.userId)
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    console.log(job, req.user.userId)
    res.status(StatusCodes.CREATED).json({ job })
}

const getSingleJob = async (req, res) => {
    const {
        user: { userId },
        params: { id: jobId },
    } = req
    const job = await Job.findOne({
        _id: jobId,
        createdBy: userId
    })

    if (!job) {
        throw new NotFoundError(`no job with id : ${jobId}`)
    }
    res.status(StatusCodes.OK).json({ job })
}

const updateJob = async (req, res) => {
    const {
        body: { company, position },
        user: { userId },
        params: { id: jobId },
    } = req

    if (company === '' || position === "") {
        throw new BadRequestError('Company or Position fields cannot be empty')
    }

    const job = await Job.findOneAndUpdate({
        _id: jobId,
        createdBy: userId
    },
        req.body,
        { new: true, runValidators: true }
    )
    if (!job) {
        throw new NotFoundError(`no job with id : ${jobId}`)
    }
    res.status(StatusCodes.OK).json({ job })
}

const deleteJob = async (req, res) => {
    const {
        user: { userId },
        params: { id: jobId },
    } = req
    const job = await Job.findByIdAndRemove({
        _id: jobId,
        createdBy: userId
    })
    if (!job) {
        throw new NotFoundError(`no job with id : ${jobId}`)
    }
    // res.status(StatusCodes.OK).send('Job was deleted successfully')
    res.status(StatusCodes.OK).json({ msg: "The job was deleted successfully." });
}

module.exports = {
    getAllJobs,
    createJob,
    getSingleJob,
    updateJob,
    deleteJob
}
